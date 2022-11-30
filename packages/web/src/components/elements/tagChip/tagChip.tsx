import TagIcon from '@mui/icons-material/Tag';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type Props = {
  tagsOnArticles: string[];
}


export default function TagChip({tagsOnArticles}: Props): JSX.Element {
  return (
    <>
      <Stack direction="row" spacing={1}>
        {
          tagsOnArticles.map((tag) => (
            <Chip size='small' key={tag} icon={<TagIcon />} label={tag} />
          ))
        }
      </Stack>
    </>
  );
}