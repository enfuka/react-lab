/**
 * 1. Return valid JSX from the App component.
 * 2. Render the passed text "Lab 1" in the Title component by using the `children` prop.
 * 3. Fix the props in the Greeting component.
 * 4. Add types for component props.
 */

type TitleProps = {
  children: string;
}

export function App() {
  return (
    <>
      <Title>Lab 1</Title>
      <Greeting name="Zack" />
    </>
  );
}

function Title({children}:TitleProps) {
  return <h1 className="text-2xl">{children}</h1>;
}

function Greeting({name}: any) {
  return <div>Hey {name}, welcome to CoStar!</div>;
}
