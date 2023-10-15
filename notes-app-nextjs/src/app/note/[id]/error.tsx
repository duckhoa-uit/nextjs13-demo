"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="note-viewer">
      <div className="note--empty-state">
        <span className="note-text--empty-state">Has error in note details: {error.message}</span>
      </div>
    </div>
  );
}
