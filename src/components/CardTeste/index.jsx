import './styles.css'

export function Teste() {
    return (
        <div className="relative component-wrapper">
          <div className="absolute top-0 left-0 triangle top-left"></div>
          <div className="absolute top-[50px] left-[50px] square"></div>
          <div className="absolute bottom-[50px] right-[50px] square"></div>
          <div className="absolute bottom-0 right-0 triangle bottom-right"></div>
          <div className="absolute center-text font-bold">Centered Text</div>
          <div className="absolute bottom-btn left-btn right-btn">
            <button className="w-full rounded-b-lg">Click me</button>
          </div>
        </div>
      );
    }
  
  