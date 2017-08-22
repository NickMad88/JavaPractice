var users = {
    
      'students': [
        {first_name: 'Michael', last_name: 'Jordan'},
        {first_name: 'John', last_name: 'Rosales'},
        {first_name:'Mark', last_name: 'Guillen'},
        {first_name: 'KB', last_name: 'Tonel'}
        ],
        
     'instructors': [
          {first_name: 'Michael', last_name: 'Choi'},
          {first_name: 'Martin', last_name: 'Puryear'}
        ]
    };
    
    console.log("Students");
    
    for (var derp in users.students){
      console.log((Number(derp)+1) + " - " +  users.students[derp].first_name +" "+ users.students[derp].last_name + " - " + (users.students[derp].first_name.length + users.students[derp].last_name.length));
    }
    
    console.log("Instructors");
    
    for (var derp in users.instructors){
      console.log((Number(derp)+1) + " - " +  users.instructors[derp].first_name +" "+ users.instructors[derp].last_name + " - " + (users.instructors[derp].first_name.length + users.instructors[derp].last_name.length));
    }