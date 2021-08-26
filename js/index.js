var app = new Vue({
    el: '#app',
    data: {
      user,
      contacts,
      searchedUser: "",
    },
    methods: {
      search(string) {
        if(string === "") {
          return contacts;
        } else {
          var searchedContacts = [];
          contacts.forEach(element => { 
            if (element.name.toLowerCase().includes(string.toLowerCase())) {
              searchedContacts.push(element);
            }
          })
          return searchedContacts;
        }
      },
    }
})



