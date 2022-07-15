import React, { useState } from "react";

function SongSubmissionForm() {
  const [form, setForm] = useState({
    artistName: "Artist/Band Name",
    songTitle: "Song Title"
  });

  return (
    <>
      <label>
        Artist/Band Name:
        <input
          value={form.artistName}
          onChange={(e) => {
            setForm({
              ...form,
              artistName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Song Title:
        <input
          value={form.songTitle}
          onChange={(e) => {
            setForm({
              ...form,
              songTitle: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.artistName} {form.songTitle}
      </p>
    </>
  );
}

export default SongSubmissionForm;
