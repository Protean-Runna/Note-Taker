export default function NoteCard(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <div
        style={{
          marginBottom: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          textAlign: "left",
        }}
      >
        <p>{props.content}</p>
      </div>
    </>
  );
}