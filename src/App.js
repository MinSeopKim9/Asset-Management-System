// 웹사이트 화면 출력 담당
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //  배경 및 문구 출력
    <div className="gray-background">
      <img src={logo} lat="logo"/>
        <h2>고정자산 관리 시스템</h2>
     </div>
  );
}

export default App;


