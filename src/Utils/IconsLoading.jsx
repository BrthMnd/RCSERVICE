/* eslint-disable react/prop-types */
export function IconLoading({ isLoading, props }) {
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <i className="fas fa-spinner fa-pulse fa-lg"></i>
      </div>
    );
  } else {
    return <></>;
  }
}
