const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlApi: "https://playground.4geeks.com/apis/fake/contact/",
      agenda: [],
      contactId: "",
    },
    actions: {
      agendaApi: async () => {
        const store = getStore();
        const response = await fetch(`${store.urlApi}agenda/byroncanga`);
        const data = await response.json();
        setStore({ agenda: data });
      },
      addContactApi: async (contact) => {
        const store = getStore();
        const response = await fetch(`${store.urlApi}`, {
          method: "POST",
          body: JSON.stringify(contact),
          headers: { "Content-Type": "application/json" },
        });
        getActions().agendaApi();
      },
      editContactApi: async (contact, id) => {
        const store = getStore();
        const response = await fetch(`${store.urlApi}${id}`, {
          method: "PUT",
          body: JSON.stringify(contact),
          headers: { "Content-Type": "application/json" },
        });
        getActions().agendaApi();
      },
      deleteContactApi: async (id) => {
        const store = getStore();
        const response = await fetch(`${store.urlApi}${id}`, {
          method: "DELETE",
        });
        getActions().agendaApi();
      },
    },
  };
};

export default getState;
