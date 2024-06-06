import {
  Link,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export interface IBlog {
  title: string;
  published: string;
  url: string;
}

export interface IBlogs {
  blogs: IBlog[];
}

const myBlogs: IBlog[] = [
  {
    title: `Getting Started with Git: A Beginner's Guide to Version Control`,
    published: 'Jun 6 2024',
    url: 'https://rubendguez.github.io/lets-code//pages/git-for-beginners.html',
  },
  {
    title: 'Is JavaScript a good choice for beginner developers?',
    published: 'May 20 2024',
    url: 'https://rubendguez.github.io/lets-code/pages/javascript-for-beginners',
  },
  {
    title: `What's the reason behind Coding Best Practices?`,
    published: 'May 15 2024',
    url: 'https://rubendguez.github.io/lets-code/pages/best-practices.html',
  },
];

export const BlogLinks = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Blog Posts
      </Typography>
      <BlogsTable blogs={myBlogs} />
    </div>
  );
};

const BlogsTable = ({ blogs }: IBlogs) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableCell>Title</TableCell>
          <TableCell>Published</TableCell>
        </TableHead>
        {blogs.length > 0 &&
          blogs.map((m) => (
            <BlogRows
              key={m.title.concat(m.published)}
              title={m.title}
              published={m.published}
              url={m.url}
            />
          ))}
      </Table>
    </TableContainer>
  );
};

const BlogRows = ({ title, published, url }: IBlog) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Link
          href={url}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: 'none' }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ fontWeight: '400' }}
          >
            {title}
          </Typography>
        </Link>
      </TableCell>
      <TableCell>
        <i>
          <Typography variant="caption" color="text.secondary">
            {published}
          </Typography>
        </i>
      </TableCell>
    </TableRow>
  );
};
