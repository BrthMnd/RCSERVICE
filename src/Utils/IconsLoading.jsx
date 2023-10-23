/* eslint-disable react/prop-types */
export function IconLoading({ isLoading }) {
  console.log(isLoading);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <i className="fas fa-spinner fa-pulse fa-lg"></i>
      </div>
    );
  } else {
    return <></>;
  }
}
