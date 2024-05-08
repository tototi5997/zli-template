import { useRoutes } from "react-router-dom";
import { routerConfig } from "./router";
import ModalRoot, { ModalContext } from "./modals/ModalRoot";
import useInitModal from "./hooks/useInitModal";

const App = () => {
  // 如果需要做路由级别的权限控制，可以在这里处理
  const element = useRoutes(routerConfig);
  const { modalRef, globalModal } = useInitModal();

  return (
    <ModalContext.Provider value={globalModal}>
      <>
        <ModalRoot ref={modalRef} />
        {element}
      </>
    </ModalContext.Provider>
  );
};

export default App;
