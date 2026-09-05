import { readFileSync } from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

import { readWrites } from "../app/features/write/content";

export function writeAssets(): Plugin {
  return {
    name: "write-assets",
    generateBundle() {
      for (const asset of readWrites().assets) {
        this.emitFile({
          type: "asset",
          fileName: asset.fileName,
          source: readFileSync(asset.sourcePath),
        });
      }
    },
    configureServer(server) {
      const root = path.resolve("contents/write");
      server.watcher.add(root);
      server.watcher.on("all", (_event, file) => {
        if (file.startsWith(root + path.sep))
          server.ws.send({ type: "full-reload" });
      });
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/write-assets/")) return next();
        try {
          const url = new URL(req.url, "http://localhost").pathname;
          const asset = readWrites().assets.find((asset) => asset.url === url);
          if (!asset) {
            res.statusCode = 404;
            res.end("Not Found");
            return;
          }
          res.setHeader("Content-Type", asset.mime);
          res.setHeader("Cache-Control", "no-cache");
          res.end(readFileSync(asset.sourcePath));
        } catch (error) {
          next(error);
        }
      });
    },
  };
}
