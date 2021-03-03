import React, { useState } from "react";

export function RedirectForm() {
  const [url, setUrl] = useState('');

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      window.location.href = url;
    }}
    >
      <input value={url} onChange={(event) => setUrl(event.target.value)} />
      <button type="submit">перейти</button>
    </form>
  )
}