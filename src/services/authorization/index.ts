

type Authorization = string

//Guardando token no local storage

export const storeToken = (token: Authorization) => {
    if (typeof window !== "undefined") {
      //antes de colocar, testa se window existe, para evitar carregar window no lado servidor
      window.localStorage.setItem("token", token);
    }
};