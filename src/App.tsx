import { useState } from "react";
import "./App.css";
import { HeroBanner } from "./HeroBanner";
import clsx from "clsx";

const BannerPreview = ({
  defaultBrandingColor,
  logo,
  name,
  summary,
  screenshot,
  isFullscreenApp,
  mode,
}) => {
  const [brandingColor, setBrandingColor] =
    useState<string>(defaultBrandingColor);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <label
          className="font-semibold"
          htmlFor="darkBrandingColor"
        >{`${mode} Branding Color`}</label>
        <div className="flex gap-2 items-center">
          <input
            type="color"
            id="darkBrandingColor"
            name="darkBrandingColor"
            className="cursor-pointer"
            defaultValue={brandingColor}
            onChange={(e) => setBrandingColor(e.target.value)}
          />
          <span className="">{brandingColor}</span>
        </div>
      </div>
      <HeroBanner
        theme="dark"
        brandingColor={brandingColor}
        logo={logo}
        name={name}
        summary={summary}
        screenshot={screenshot}
        isFullscreenApp={isFullscreenApp}
      />
    </div>
  );
};

function App() {
  const [name, setName] = useState<string>("Name");
  const [summary, setSummary] = useState<string>("Summary");

  const [logo, setLogo] = useState<string>();
  const [screenshot, setScreenshot] = useState<string>();

  const [isFullscreenApp, setIsFullscreenApp] = useState<boolean>(false);

  function handleLogoChange(e) {
    setLogo(URL.createObjectURL(e.target.files[0]));
  }

  function handleScreenshotChange(e) {
    setScreenshot(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className={clsx("p-4 space-y-4")}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="summary">
            Summary
          </label>
          <input
            type="text"
            id="summary"
            name="summary"
            placeholder="Summary"
            defaultValue={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="logo">
            Logo
          </label>
          <input
            type="file"
            id="logo"
            name="logo"
            accept="image/png"
            onChange={(e) => handleLogoChange(e)}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="screenshot">
            Screenshot
          </label>
          <input
            type="file"
            id="screenshot"
            name="screenshot"
            accept="image/png"
            onChange={(e) => handleScreenshotChange(e)}
          />
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="isFullscreenApp"
            name="isFullscreenApp"
            checked={isFullscreenApp}
            onChange={(e) => setIsFullscreenApp(e.target.checked)}
          />
          <label htmlFor="isFullscreenApp">Is Fullscreen App</label>
        </div>
      </div>

      <BannerPreview
        defaultBrandingColor={"#af7faf"}
        logo={logo}
        name={name}
        summary={summary}
        screenshot={screenshot}
        isFullscreenApp={isFullscreenApp}
        mode="Light"
      />

      <BannerPreview
        defaultBrandingColor={"#a599a5"}
        logo={logo}
        name={name}
        summary={summary}
        screenshot={screenshot}
        isFullscreenApp={isFullscreenApp}
        mode="Dark"
      />
    </div>
  );
}

export default App;
