import fs from "fs-extra";
import path from "path";
import * as mm from "music-metadata";

const MUSIC_DIR = "public/music";
const OUTPUT = "src/data/songs.ts";

function formatDuration(sec = 0) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function parseFromFilename(file: string) {
  const name = file.replace(".mp3", "");
  const [artist, title] = name.includes(" - ")
    ? name.split(" - ")
    : ["Unknown", name];

  return { artist, title };
}

async function generate() {
  const files = await fs.readdir(MUSIC_DIR);
  let id = 1;
  const songs = [];

  for (const file of files) {
    if (!file.toLowerCase().endsWith(".mp3")) continue;

    const meta = await mm.parseFile(path.join(MUSIC_DIR, file));
    const fallback = parseFromFilename(file);

    const duration = formatDuration(meta.format.duration);

    const coverUrl = meta.common.picture?.[0]
      ? `data:${meta.common.picture[0].format};base64,${meta.common.picture[0].data.toString("base64")}`
      : "/default-cover.jpg";

    songs.push({
      id: id++,
      title: meta.common.title || fallback.title,
      artist: meta.common.artist || fallback.artist,
      album: meta.common.album || "Unknown Album",
      duration,
      audioUrl: `/music/${file}`,
      coverUrl,
      genre: meta.common.genre || ["Emo rap"],
    });
  }

  await fs.ensureDir(path.dirname(OUTPUT));
  await fs.writeFile(
    OUTPUT,
    `export const songs = ${JSON.stringify(songs, null, 2)};`,
  );

  console.log("✅ Songs generated like manual input");
}

generate();
