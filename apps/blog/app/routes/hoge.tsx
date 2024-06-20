import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div>
      <h1>Hoge!</h1>
    </div>
  );
});
