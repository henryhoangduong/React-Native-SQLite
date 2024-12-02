import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ActivityIndicator } from "react-native";
import { db } from "../sqlite/sqlite";

type MODE = "LIGHT" | "DARK";
type SETTINGCONTEXT = {
  mode: MODE;
  fontSize: number;
  changeFontSize: (size: number) => void;
  switchTheme: () => void;
};

const SettingContext = createContext<SETTINGCONTEXT>({} as SETTINGCONTEXT);

export const SettingContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<MODE>("LIGHT");
  const [fontSize, setFontSize] = useState<number>(16);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchSetting = async () => {
      const res = await db.getAllAsync("Select * from settings;");
      setMode(res[0]["mode"]);
      setFontSize(res[0]["font_size"]);
      setLoading(false);
    };
    fetchSetting();
  }, []);

  const changeFontSize = async (size: number) => {
    const query = `
    UPDATE settings
    SET font_size = ?
    WHERE id = 1;
  `;

    await db.runAsync(query, [size]);
    setFontSize(size);
  };
  const switchTheme = async () => {
    setMode((prevMode) => (prevMode === "LIGHT" ? "DARK" : "LIGHT"));
    const query = `
    UPDATE settings
    SET mode = ?
    WHERE id = 1;
  `;

    await db.runAsync(query, [mode === "LIGHT" ? "DARK" : "LIGHT"]);
  };
  if (loading) return <ActivityIndicator style={{ top: "50%" }} />;
  return (
    <SettingContext.Provider
      value={{ mode, fontSize, changeFontSize, switchTheme }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export const useSetting = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw Error("context must be initialized before accessing");
  }
  return context;
};
