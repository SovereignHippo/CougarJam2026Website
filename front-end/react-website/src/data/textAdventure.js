//function gets called evertime the user submits an aswer
//res is their response
//fnc should return true if the question is open ended

let textAdventure =  {
    
    prompt: "Will you kill me?",
    fnc:(res) => {return false},
    options:[

        {
            choice:"yes",
            next: {
                prompt: "oh no",
                fnc:(res) => {return false},
                options: []
            }
        },
        {
            choice:"no",
            next: {
                prompt: "Why not?",
                fnc:(res) => {return false},
                options: [
                    {
                        choice:"idk",
                        next:{
                            prompt: "lame",
                            fnc:(res) => {return false},
                            options: []
                        }
                    },
                    {
                        choice:"I love you!",
                        next:{
                            prompt: "Nani!",
                            fnc:(res) => {return false},
                            options: []
                        }
                    },
                    {
                        choice:"I Hate you!",
                        next:{
                            prompt: "What is your name?",
                            options:[],
                            fnc:function(res) {
                                console.log(res)
                                this.next.prompt = `Nice to meet you ${res}`;
                                return true;
                            },
                            next: {
                                prompt:`nice to meet you`,
                                fnc:(res) => {return false},
                                options: []
                            },
                            
                        }
                    },
                ]
            }
        }

    ]




};

export default textAdventure