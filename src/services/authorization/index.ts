

type AuthToken = string

//Guardando token no local storage

export const storeToken = (token: AuthToken) => {
    if (typeof window !== "undefined") {
      //antes de colocar, testa se window existe, para evitar carregar window no lado servidor
      window.localStorage.setItem("token", token);
    }
};