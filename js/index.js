var app = new Vue({
    el: '#app',
    data: {
      data,
      searchedUser: "",
      selectedContact: data.contacts[0],
    },
    methods: {
      search(string) {
        if(string === "") {
          return data.contacts;
        } else {
          var searchedContacts = [];
          data.contacts.forEach(element => { 
            if (element.name.toLowerCase().includes(string.toLowerCase())) {
              searchedContacts.push(element);
            }
          })
          return searchedContacts;
        }
      },
    }
})



