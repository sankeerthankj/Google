import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextInterface {
  getResults: (data: string) => void;
  results: object | any;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}

export const ResultContext = createContext<ContextInterface>({
  getResults: () => {},
  results: [],
  searchTerm: "",
  setSearchTerm: () => {},
  isLoading: false,
});

const baseurl = "https://google-search74.p.rapidapi.com/";


interface Props {
  children: ReactNode;
}

export const ResultContextProvider: FC<Props> = ({ children }) => {
  const [results, setResults] = useState<object>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getResults = async (type: string) => {
    setIsLoading(true);

    const response = await fetch(`${baseurl}${type}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search74.p.rapidapi.com", 
        "x-rapidapi-key": import.meta.env.VITE_API_KEY
          ? import.meta.env.VITE_API_KEY
          : ""
      },
    });

    const data = await response.json();

    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/image")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    setIsLoading(false);
  };

  const sampleAppContext: ContextInterface | null = {
    getResults,
    results,
    searchTerm,
    setSearchTerm,
    isLoading,
  };
  return (
    <ResultContext.Provider value={sampleAppContext}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
