import SiteLogo from "./siteLogo";
import ToolsBar from "./ToolsBar";

export default function Header() {
  return (
    <>
      <header className="mt-12 flex w-full items-center justify-center px-8 md:justify-between">
        <SiteLogo />
        {/* <CategoriesBar /> */}
        <ToolsBar />
      </header>

      {/* 分类栏 */}
      {/* <CategoriesBar /> */}
    </>
  );
}
