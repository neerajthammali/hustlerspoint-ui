import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

type Directory = 'blog' | 'stories' | 'services';

export function getSortedPostsData(directory: Directory) {
  const postsDirectory = path.join(contentDirectory, directory);
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string; [key: string]: any }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(directory: Directory) {
    const postsDirectory = path.join(contentDirectory, directory);
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
        params: {
            slug: fileName.replace(/\.md$/, ''),
        },
        };
    });
}

export async function getPostData(directory: Directory, id: string) {
  const postsDirectory = path.join(contentDirectory, directory);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; [key: string]: any }),
  };
}
