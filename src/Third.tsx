type check = {
  a: Boolean;
  b: Boolean;
};
const Third = (props: check) => {
  return props.a && props.b ? (
    <input checked={props.a && props.b ? true : false} type="checkbox" />
  ) : (
    <>uncheck</>
  );
};

export default Third;
