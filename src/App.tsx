import axios from "axios";
import { useState, useEffect } from "react";
import { AstroList, MainContainer, Input } from "./style";
import { AstroCard, AstroProps } from "./Components/CardAstro";

export function App() {
  const [astros, setAstro] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [astrosFilter, setAstrosFilter] = useState<any>([]);
  const [optionType, setOptionType] = useState<any>("showAll");

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          "https://api.le-systeme-solaire.net/rest/bodies/"
        );
        setAstro(res.data.bodies);
        setLoading(false);
      } catch (err) {}
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (search === "") return setAstrosFilter(astros);
    const astroCopy = [...astros];
    const filterAstro = astroCopy.filter((astro) => {
      return astro.englishName.toLowerCase().includes(search.toLowerCase());
    });
    setAstrosFilter(filterAstro);
  }, [search]);

  useEffect(() => {
    if (optionType === "showAll") return setAstrosFilter(astros);
    const filterAstro = astros.filter((astro: any) => {
      return (
        astro.bodyType === optionType &&
        astro.englishName.toLowerCase().includes(search.toLowerCase())
      );
    });
    setAstrosFilter(filterAstro);
  }, [optionType]);

  return (
    <>
      <MainContainer>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <div>
          <select
            name="select"
            value={optionType}
            onChange={(e) => setOptionType(e.target.value)}
          >
            <option value="showAll">All</option>
            <option value="Moon">Moon</option>
            <option value="Comet">Comet</option>
            <option value="Asteroid">Asteroid</option>
            <option value="Dwarf Planet">Dwarf Planet</option>
            <option value="Planet">Planet</option>
            <option value="Star">Star</option>
          </select>
        </div>
        <AstroList>
          {loading && <p>Loading data...</p>}
          {search || optionType !== "showAll"
            ? astrosFilter.map((astro: any) => (
                <AstroCard
                  englishName={astro.englishName}
                  isPlanet={astro.isPlanet}
                  gravity={astro.gravity}
                  discoveredBy={astro.discoveredBy}
                  discoveryDate={astro.discoveryDate}
                  bodyType={astro.bodyType}
                />
              ))
            : astros.map((astro: AstroProps) => (
                <AstroCard
                  englishName={astro.englishName}
                  isPlanet={astro.isPlanet}
                  gravity={astro.gravity}
                  discoveredBy={astro.discoveredBy}
                  discoveryDate={astro.discoveryDate}
                  bodyType={astro.bodyType}
                />
              ))}
        </AstroList>
      </MainContainer>
    </>
  );
}
