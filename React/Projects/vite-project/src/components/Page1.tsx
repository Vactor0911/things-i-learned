export const Page1 = () => {
  return (
    <>
      {/*
            React는 리턴시 하나의 컴포넌트만 반환 가능함.
            여러개의 컴포넌트를 반환하려면 Fragment를 사용해야 함.
            Fragment는 렌더링시 렌더링되지 않음.
            Fragment는 <></>로도 사용 가능함.
         */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Page1</h1>
      </div>
    </>
  );
};
