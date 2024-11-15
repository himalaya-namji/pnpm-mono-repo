export const View = () => {
  return (
    <>
      <div
        style={{ width: "100%", height: "100%" }}
        onClick={(event: any) => console.log(event)}
      >
        <iframe width="100%" height="1980px" />
      </div>
    </>
  );
};
