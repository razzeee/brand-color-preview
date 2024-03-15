import { ChangeEvent, useState } from "react";
import "./App.css";
import { HeroBanner } from "./HeroBanner";
import clsx from "clsx";

const BannerPreview = ({
  brandingColor,
  setBrandingColor,
  logo,
  name,
  summary,
  screenshot,
  isFullscreenApp,
  mode,
}: {
  brandingColor: string;
  setBrandingColor: (color: string) => void;
  logo: string;
  name: string;
  summary: string;
  screenshot: string;
  isFullscreenApp: boolean;
  mode: "Dark" | "Light";
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <label
          className="font-semibold"
          htmlFor="brandingColor"
        >{`${mode} Branding Color`}</label>
        <div className="flex gap-2 items-center">
          <input
            type="color"
            id="brandingColor"
            name="brandingColor"
            className="cursor-pointer"
            value={brandingColor}
            onChange={(e) => setBrandingColor(e.target.value)}
          />
          <span className="">{brandingColor}</span>
        </div>
      </div>
      <HeroBanner
        theme={mode === "Dark" ? "dark" : "light"}
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

  const [brandingColorLight, setBrandingColorLight] =
    useState<string>("#af7faf");

  const [brandingColorDark, setBrandingColorDark] = useState<string>("#a599a5");

  function handleLogoChange(e: ChangeEvent<HTMLInputElement>) {
    setLogo(URL.createObjectURL(e.target.files[0]));
  }

  function handleScreenshotChange(e: ChangeEvent<HTMLInputElement>) {
    setScreenshot(URL.createObjectURL(e.target.files[0]));
  }

  const code = `<branding>
  <color type="primary" scheme_preference="light">${brandingColorLight}</color>
  <color type="primary" scheme_preference="dark">${brandingColorDark}</color>
</branding>`;

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
            className="rounded-md"
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
            className="rounded-md"
            name="summary"
            placeholder="Summary"
            defaultValue={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="logo">
                Logo
              </label>
              <input
                type="file"
                id="logo"
                name="logo"
                accept="image/png, image/svg+xml"
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
                className="rounded-sm"
                name="isFullscreenApp"
                checked={isFullscreenApp}
                onChange={(e) => setIsFullscreenApp(e.target.checked)}
              />
              <label htmlFor="isFullscreenApp">Is Fullscreen App</label>
            </div>
          </div>

          <pre className="rounded-2xl border p-4">
            <code className="prose whitespace-break-spaces">{code}</code>
          </pre>
        </div>
      </div>

      <BannerPreview
        brandingColor={brandingColorLight}
        setBrandingColor={setBrandingColorLight}
        logo={logo}
        name={name}
        summary={summary}
        screenshot={screenshot}
        isFullscreenApp={isFullscreenApp}
        mode="Light"
      />

      <BannerPreview
        brandingColor={brandingColorDark}
        setBrandingColor={setBrandingColorDark}
        logo={logo}
        name={name}
        summary={summary}
        screenshot={screenshot}
        isFullscreenApp={isFullscreenApp}
        mode="Dark"
      />

      <div className="flex flex-col items-center justify-center w-full">
        <span className="prose">
          Done by{" "}
          <a href="https://osna.social/@razze" target="_blank" rel="noreferrer">
            @razze
          </a>
        </span>
        <span className="prose">
          Source at{" "}
          <a
            href="https://github.com/razzeee/brand-color-preview"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/razzeee/brand-color-preview
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
