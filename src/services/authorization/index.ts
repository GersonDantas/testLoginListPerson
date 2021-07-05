

type AuthToken = string

//colocando token no local storage

export const storeToken = (authToken: AuthToken) => {
    if (typeof window !== "undefined") {
      //antes de colocar, testa se window existe, pra não ter o perigo de carregar no server-seide
      window.localStorage.setItem("authToken", authToken);
    }
};