//function gets called everytime the user submits an answer
//res is their response
//fnc should return true if the question is open ended

export let textAdventure =  {
    
    prompt: "You're traveling through the woods when you come across a fork.",
    
    next:{
        prompt: "To your left is a beautiful flower path full of sunshine and joy.",

        next:{
            prompt: "To your right the path is overgrown, very little light reaches the ground, you feel a chill run down your spine.",

            next:{
                prompt: "Which path do you take?",
                options: [
                    {
                        choice: "Light",
                        next:{
                            prompt:"You choose the light path since the pink flowers remind you of your beloved princess whom you've come to rescue.",
                            next:{
                                prompt:"Further along you find a pair of signs, they read \"Witch's Lair 1km East\" and \"Treasure 1.4km West.\"",
                                next: {
                                    prompt:"Which way do you go?",
                                    options: [
                                        {
                                            choice: "East",
                                            next:{
                                                prompt:"You hold your head up high and march on, staying true to your mission.",
                                                next:{
                                                    prompt:"While traveling the path you find a pair of corpses, a scholar and a knight. Upon inspection you find both were stabbed through the chest, the knight's sword still sheathed.",
                                                    next:{
                                                        prompt:"You decide to take something to help you on your quest.",
                                                        next:{
                                                            prompt:"Do you take the knight's sword or the scholar's pen?",
                                                            options:[
                                                                {
                                                                    choice:"Sword",
                                                                    next:{
                                                                        prompt:"Obviously you take the sword, you know danger lies ahead and want to be ready.",
                                                                        next:{
                                                                            prompt:"Feeling more confident now, you approach the Witch's Lair.",
                                                                            next:{
                                                                                prompt:"It's different than you expect, instead of a castle or a tower you find a field of beautiful flowers.",
                                                                                next:{
                                                                                    prompt:"Sitting in the center you see a woman wearing a red dress so vibrant it makes the roses look dull and hair so golden it makes you feel poor just looking at it.",
                                                                                    next:{
                                                                                        prompt:"You found her, your beloved!",
                                                                                        next:{
                                                                                            prompt:"What do you do?",
                                                                                            options: [
                                                                                                {
                                                                                                    choice:"Embrace Her",
                                                                                                    next:{
                                                                                                        prompt:"At long last you've found her, wasting no time you rush to embrace her. Finally she's safe in your arms.",
                                                                                                        next:{
                                                                                                            prompt:"Overwhelmed by joy you begin to cry.",
                                                                                                            next:{
                                                                                                                prompt:"But something isn't right...",
                                                                                                                next:{
                                                                                                                    prompt:"What is that smell? It smells like a rotting corpse!",
                                                                                                                    next:{
                                                                                                                        prompt:"Repulsed you try to push away, but it's already too late. You feel the air escape your lungs.",
                                                                                                                        next:{
                                                                                                                            prompt:"You've been stabbed.",
                                                                                                                            next:{
                                                                                                                                prompt:"You have died!",
                                                                                                                                owner:"bot-evil",
                                                                                                                                ending:"0000"
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    choice:"Kill Her",
                                                                                                    next:{
                                                                                                        prompt:"You begin to approach your beloved, making as if to hug her, but at the last second you go for your sword instead.",
                                                                                                        next:{
                                                                                                            prompt:"It happened in a flash, only taking a single swing to split her neck into two.",
                                                                                                            next:{
                                                                                                                prompt:"You look down at the now severed head of the witch, a look of surprise still plastered on her face.",
                                                                                                                next:{
                                                                                                                    prompt:"You did it. You may not have found your beloved but now you can rest knowing her kidnapper is dead.",
                                                                                                                    next:{
                                                                                                                        prompt:"Revenge Ending",
                                                                                                                        owner:"bot-good",
                                                                                                                        ending:"1000"
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }

                                                                },
                                                                {
                                                                    choice:"Pen",
                                                                    next:{
                                                                        prompt:"You pick up the pen!",
                                                                        next:{
                                                                            prompt:"Umm...",
                                                                            next:{
                                                                                prompt:"Now what?",
                                                                                options:[
                                                                                    {
                                                                                        choice:"Write",
                                                                                        next:{
                                                                                            prompt:"You decide the best thing to do is write a very strongly worded letter.",
                                                                                            next:{
                                                                                                prompt:"Satisfied that you made your point clear you leave the letter for the witch to find and head home.",
                                                                                                next:{
                                                                                                    prompt:"However because you return home with neither riches nor glory, you are shunned by the townsfolk.",
                                                                                                    next:{
                                                                                                        prompt:"No one dares speak to you.",
                                                                                                        next:{
                                                                                                            prompt:"No one will hire you.",
                                                                                                            next:{
                                                                                                                prompt:"No one will house you.",
                                                                                                                next:{
                                                                                                                    prompt:"The winter is long and harsh.",
                                                                                                                    next:{
                                                                                                                        prompt:"You do not survive.",
                                                                                                                        next:{
                                                                                                                            prompt:"You have died!",
                                                                                                                            owner:"bot-evil",
                                                                                                                            ending:"0000"
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        choice:"Draw",
                                                                                        next:{
                                                                                            prompt:"Suddenly overwhelmed by the beauty of nature, you decide it needs to be captured and it's up to you to do it.",
                                                                                            next:{
                                                                                                prompt:"Hours you spend pouring your heart and soul into your work.",
                                                                                                next:{
                                                                                                    prompt:"When it's done it brings a single tear to your eye.",
                                                                                                    next:{
                                                                                                        prompt:"Only what's this?",
                                                                                                        next:{
                                                                                                            prompt:"You find a red stain on your otherwise immaculate work.",
                                                                                                            next:{
                                                                                                                prompt:"In fact there's a red liquid running down your chest.",
                                                                                                                next:{
                                                                                                                    prompt:"Turns out while you were focusing on your work someone stabbed you.",
                                                                                                                    next:{
                                                                                                                        prompt:"You have died!",
                                                                                                                        owner:"bot-evil",
                                                                                                                        ending:"0000"
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            choice:"West",
                                            next:{
                                                prompt:"Seduced by the idea, you follow the path to treasure.",
                                                next:{
                                                    prompt:"Along the way you see an old man, he appears to be hurt.",
                                                    next:{
                                                        prompt:"Will you help him or ignore him?",
                                                        options:[
                                                            {
                                                                choice:"Help",
                                                                next:{
                                                                    prompt:"Feeling the call to duty, you help the old man.",
                                                                    next:{
                                                                        prompt:"Thankful, the man says he wants to reward you.",
                                                                        next:{
                                                                            prompt:"The man asks \"Would you rather always give or always receive?\"",
                                                                            options:[
                                                                                {
                                                                                    choice:"Give",
                                                                                    next:{
                                                                                        prompt:"The man smiles.",
                                                                                        next:{
                                                                                            prompt:"He tells you that in order to give you must first receive, so he gives you a gift.",
                                                                                            next:{
                                                                                                prompt:"You unwrap it to find what is very clearly a clue telling you \"When in doubt, go for the eye.\"",
                                                                                                next:{
                                                                                                    prompt:"You ask the man what this is for, but when you look up he is no where to be seen.",
                                                                                                    next:{
                                                                                                        prompt:"Confusing Ending",
                                                                                                        owner:"bot-good",
                                                                                                        ending:"0100"
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    choice:"Receive",
                                                                                    next:{
                                                                                        prompt:"Looking disapointed the man bids you ado and in flash of smoke he disapears.",
                                                                                        next:{
                                                                                            prompt:"You are left feeling uneasy.",
                                                                                            next:{
                                                                                                prompt:"Having achieved nothing you decide it's time to return home.",
                                                                                                next:{
                                                                                                    prompt:"Upon arrival you find your house completely empty.",
                                                                                                    next:{
                                                                                                        prompt:"You've been robbed!",
                                                                                                        next:{
                                                                                                            prompt:"This sucks, but luckily your smart, you keep all your money in the town bank.",
                                                                                                            next:{
                                                                                                                prompt:"However when you get to the bank you find that it too has been robbed!",
                                                                                                                next:{
                                                                                                                    prompt:"And while on your way back YOU GET MUGGED!",
                                                                                                                    next:{
                                                                                                                        prompt:"At the end of the day you are left completely broke, not a coin to your name.",
                                                                                                                        next:{
                                                                                                                            prompt:"You spend the rest of your days begging and only getting by on the handouts of others, constantly wishing for a do over.",
                                                                                                                            next:{
                                                                                                                                prompt:"You have died!",
                                                                                                                                owner:"bot-evil",
                                                                                                                                ending:"0000"
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                choice:"Ignore",
                                                                next:{
                                                                    prompt:"You walk past the man making sure to avoid eye contact.",
                                                                    next:{
                                                                        prompt:"Continuing on the path to treasure you find a statue of a cat. Standing at 9ft tall and made of solid marble, you're thankful that it's not a real cat because if it was you would probably have crapped your pants.",
                                                                        next:{
                                                                            prompt:"As you get closer the earth beings to rumble and much to the dismay of your pants the statue begins to move.",
                                                                            next:{
                                                                                prompt:"\"Who dares approach me!\" roars the cat statue.",
                                                                                next:{
                                                                                    prompt:"Mustering your courage you manage to say \"It is I Watt the Warrior, I've come seeking treasure.\"",
                                                                                    next:{
                                                                                        prompt:"\"I will grant you what you seek, only if you can answer my riddle. If you cannot you will become my lunch.\"",
                                                                                        next:{
                                                                                            prompt:"\"If a cannon is sitting on top a 100m castle wall and fires a cannon ball perfectly horizontally with a velocity of 60 m/s, assuming no air resistance how far horizontally does the cannon ball travel before hitting the ground?\"",
                                                                                            options:[
                                                                                                {
                                                                                                    choice:"178 m",
                                                                                                    next:{
                                                                                                        prompt:"That is...",
                                                                                                        next:{
                                                                                                            prompt:"incorrect!",
                                                                                                            next:{
                                                                                                                prompt:"Quick as a cat, much faster then you would have thought a statue could move, you are eaten.",
                                                                                                                next:{
                                                                                                                    prompt:"You have died!",
                                                                                                                    owner:"bot-evil",
                                                                                                                    ending:"0000"
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    choice:"192 m",
                                                                                                    next:{
                                                                                                        prompt:"That is...",
                                                                                                        next:{
                                                                                                            prompt:"incorrect!",
                                                                                                            next:{
                                                                                                                prompt:"Quick as a cat, much faster then you would have thought a statue could move, you are eaten.",
                                                                                                                next:{
                                                                                                                    prompt:"You have died!",
                                                                                                                    owner:"bot-evil",
                                                                                                                    ending:"0000"
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    choice:"271 m",
                                                                                                    next:{
                                                                                                        prompt:"That is...",
                                                                                                        next:{
                                                                                                            prompt:"correct!",
                                                                                                            next:{
                                                                                                                prompt:"Once again the earth rumbles as the statue moves away, revealing a staircase into the earth.",
                                                                                                                next:{
                                                                                                                    prompt:"Descending down you find yourself in the main chamber, gold fills the room.",
                                                                                                                    next:{
                                                                                                                        prompt:"You're RICH!",
                                                                                                                        next:{
                                                                                                                            prompt:"Treasure Ending",
                                                                                                                            owner:"bot-good",
                                                                                                                            ending:"0010"
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    choice:"324 m",
                                                                                                    next:{
                                                                                                        prompt:"That is...",
                                                                                                        next:{
                                                                                                            prompt:"incorrect!",
                                                                                                            next:{
                                                                                                                prompt:"Quick as a cat, much faster then you would have thought a statue could move, you are eaten.",
                                                                                                                next:{
                                                                                                                    prompt:"You have died!",
                                                                                                                    owner:"bot-evil",
                                                                                                                    ending:"0000"
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    {
                        choice:"Dark",
                        next:{
                            prompt:"Being the brave knight you are you go down the dark scary path.",
                            next:{
                                prompt:"Further along you find another fork in the road.",
                                next:{
                                    prompt:"Both paths have warning signs.",
                                    next:{
                                        prompt:"To your left is a sign that reads \"Warning Pitfalls ahead!\"",
                                        next:{
                                            prompt:"To your right \"Beware Bears!\"",
                                            next:{
                                                prompt:"Which way do you go?",
                                                options:[
                                                    {
                                                        choice:"Pitfalls",
                                                        next:{
                                                            prompt:"You decide to risk the pitfalls and march bravely on.",
                                                            next:{
                                                                prompt:"Not 10 minutes pass and you fall into a pitfall.",
                                                                next:{
                                                                    prompt:"Having no way to escpe you slowly starve to death.",
                                                                    next:{
                                                                        prompt:"You have died!",
                                                                        owner:"bot-evil",
                                                                        ending:"0000"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        choice:"Bears",
                                                        next:{
                                                            prompt:"You decide it'd be easier to fend off a bear then escape a pitfall.",
                                                            next:{
                                                                prompt:"You march on!",
                                                                next:{
                                                                    prompt:"Not 10 minutes go by and you run into your first obstacle.",
                                                                    next:{
                                                                        prompt:"You've stepped into a bear trap!",
                                                                        next:{
                                                                            prompt:"What do you do?",
                                                                            options:[
                                                                                {
                                                                                    choice:"Release",
                                                                                    next:{
                                                                                        prompt:"You desperately look for a way to release the mechanism trapping you.",
                                                                                        next:{
                                                                                            prompt:"You find it. Actually it wasn't hard to find or anything, almost like these things were built for holding bears and not people.",
                                                                                            next:{
                                                                                                prompt:"Once free you exam your leg. Let's just say you ain't walking out of here.",
                                                                                                next:{
                                                                                                    prompt:"As you sit down you hear a russel in the woods ahead, out comes a 300lb grizzly bear and he's looking directly at you!",
                                                                                                    next:{
                                                                                                        prompt:"What do you do?",
                                                                                                        options:[
                                                                                                            {
                                                                                                                choice:"Scare Him",
                                                                                                                next:{
                                                                                                                    prompt:"You get up on your mangled leg and try to look as big as possible. Then you let out the deepest, scariest scream you can manage.",
                                                                                                                    next:{
                                                                                                                        prompt:"It works!",
                                                                                                                        next:{
                                                                                                                            prompt:"Or that's what I would say had this been a black bear and not a brown bear.",
                                                                                                                            next:{
                                                                                                                                prompt:"You do sucessfully scare the bear but instead of running away the 300lb beast crushes your skull.",
                                                                                                                                next:{
                                                                                                                                    prompt:"You have died!",
                                                                                                                                    owner:"bot-evil",
                                                                                                                                    ending:"0000"
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            },
                                                                                                            {
                                                                                                                choice:"Play Dead",
                                                                                                                next:{
                                                                                                                    prompt:"You drop dead immediately; holding as still as possible and praying he isn't hungry.",
                                                                                                                    next:{
                                                                                                                        prompt:"The bear approaches you, sniffing cautiously.",
                                                                                                                        next:{
                                                                                                                            prompt:"\"Oh gods this is it!\" you think to yourself, but just then the bear picks you up and puts you on his back.",
                                                                                                                            next:{
                                                                                                                                prompt:"\"WTF?\" Now you're confused.",
                                                                                                                                next:{
                                                                                                                                    prompt:"You're pretty sure bears don't save their food for later. Actually now that you think about it you're pretty sure bears dont eat humans at all.",
                                                                                                                                    next:{
                                                                                                                                        prompt:"The bear carries you back to his den, there he puts you on his couch where Mrs.Bear takes a look at your mangled leg.",
                                                                                                                                        next:{
                                                                                                                                            prompt:"Turns out Mr.Bear saw your encounter with the bear trap and was worried about you.",
                                                                                                                                            next:{
                                                                                                                                                prompt:"He figured you needed help so he brought you home and lucky for you Mrs.Bear is a doctor who works in the ER just down the road.",
                                                                                                                                                next:{
                                                                                                                                                    prompt:"It takes time for your leg to heal, but it's not unpleasent, the Bears have a very cozy home.",
                                                                                                                                                    next:{
                                                                                                                                                        prompt:"You spend your time talking to Mr and Mrs.Bear, getting to know them.",
                                                                                                                                                        next:{
                                                                                                                                                            prompt:"You find they have two children, Baby Bear and Betty Bear, both of whom are in college now and although they visit now and then, the den still feels quiet without them.",
                                                                                                                                                            next:{
                                                                                                                                                                prompt:"You get the feeling Mr and Mrs.Bear enjoy having you around.",
                                                                                                                                                                next:{
                                                                                                                                                                    prompt:"Eventually your leg heals and your time at the Bears comes to an end. You say your goodbyes and leave knowing there is always room for you at the Bears.",
                                                                                                                                                                    next:{
                                                                                                                                                                        prompt:"Happy Home Ending",
                                                                                                                                                                        owner:"bot-good",
                                                                                                                                                                        ending:"0001"
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    choice:"Gnaw",
                                                                                    next:{
                                                                                        prompt:"You gnaw off your leg.",
                                                                                        next:{
                                                                                            prompt:"You hobble forward, blood oozing out of your stump leg.",
                                                                                            next:{
                                                                                                prompt:"Up ahead you see a figure.",
                                                                                                next:{
                                                                                                    prompt:"There coming closer.",
                                                                                                    next:{
                                                                                                        prompt:"Thank the gods.",
                                                                                                        next:{
                                                                                                            prompt:"You can almost see their face.",
                                                                                                            next:{
                                                                                                                prompt:"It's.",
                                                                                                                next:{
                                                                                                                    prompt:"It's..",
                                                                                                                    next:{
                                                                                                                        prompt:"It's...",
                                                                                                                        next:{
                                                                                                                            prompt:"Hollywood Superstar Shia LaBeouf!",
                                                                                                                            next:{
                                                                                                                                prompt:"You have died!",
                                                                                                                                owner:"bot-evil",
                                                                                                                                ending:"0000"
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }
    }


};

export let textAdventureTrueEnding =  {
    
    
                        choice:"Secret Path",
                        next:{
                            prompt:"You notice that straight ahead there's a thrid path, faded but followable.",
                            next:{
                                prompt:"You decide to follow the secret path. It's long and windy, but eventually you find yourself at the mouth of a cave.",
                                next:{
                                    prompt:"This is it! The moment you've been waiting for.",
                                    next:{
                                        prompt:"Inside the cave you find skeleton after skeleton of fallen knights, littering the ground.",
                                        next:{
                                            prompt:"That's when you see it.",
                                            next:{
                                                prompt:"20ft tall, scaly skin, and fangs the size of your arm.",
                                                next:{
                                                    prompt:"You find yourself face to face with a full grown dragon!",
                                                    next:{
                                                        prompt:"You stand frozen in fear.",
                                                        next:{
                                                            prompt:"The dragon having noticed you enter, stares at you as if trying to read your very soul.",
                                                            next:{
                                                                prompt:"Next thing you know he roars! Except its not a roar? It's a laugh!",
                                                                next:{
                                                                    prompt:"He is laughing at you.",
                                                                    next:{
                                                                        prompt:"\"This is who they send! The king must be as stupid as he looks.\" bellows the dragon",
                                                                        next:{
                                                                            prompt:"\"Tell me boy, are you even old enough to speak, do you even know your own name?\"",
                                                                            options:[
                                                                                {
                                                                                    choice:"Billy the Brave",
                                                                                    next:{
                                                                                        prompt:"You are so overwhelmed by the dragon's presence that you can't even remember you own name.",
                                                                                        next:{
                                                                                            prompt:"Unable to do anything right, you are eaten, failing your quest.",
                                                                                            next:{
                                                                                                prompt:"You have died!",
                                                                                                owner:"bot-evil"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    choice:"Watt the Warrior",
                                                                                    next:{
                                                                                        prompt:"Summoning your courage you find your voice",
                                                                                        next:{
                                                                                            prompt:"\"My name is Watt the Warrior and I have come to slay you, you foul beast and save my beloved!\"",
                                                                                            next:{
                                                                                                prompt:"The dragon is no longer laughing.",
                                                                                                next:{
                                                                                                    prompt:"Brave as you are you are still unarmed and unprepared.",
                                                                                                    next:{
                                                                                                        prompt:"The dragon pins you down under his mighty claw.",
                                                                                                        next:{
                                                                                                            prompt:"What do you do?",
                                                                                                            options:[
                                                                                                                {
                                                                                                                    choice:"Free Yourself",
                                                                                                                    next:{
                                                                                                                        prompt:"You try to free yourself.",
                                                                                                                        next:{
                                                                                                                            prompt:"I remind you the dragon is 20ft tall. Your like 5'9 at best.",
                                                                                                                            next:{
                                                                                                                                prompt:"You are no match.",
                                                                                                                                next:{
                                                                                                                                    prompt:"You are eaten alive.",
                                                                                                                                    next:{
                                                                                                                                        prompt:"You have died!",
                                                                                                                                        owner:"bot-evil"
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                },
                                                                                                                {
                                                                                                                    choice:"Make a Bear Call",
                                                                                                                    next:{
                                                                                                                        prompt:"Desperate you make a bear call.",
                                                                                                                        next:{
                                                                                                                            prompt:"Nothing happens...",
                                                                                                                            next:{
                                                                                                                                prompt:"It looks like this is the end.",
                                                                                                                                next:{
                                                                                                                                    prompt:"The dragon goes in for the kill.",
                                                                                                                                    next:{
                                                                                                                                        prompt:"CRUNCH!",
                                                                                                                                        next:{
                                                                                                                                            prompt:"At the last secound Mr.Bear jumps infront of the dragon!",
                                                                                                                                            next:{
                                                                                                                                                prompt:"He saved you.",
                                                                                                                                                next:{
                                                                                                                                                    prompt:"Fueled by anger you grab a sword from a nerby corpse and rush the dragon!",
                                                                                                                                                    next:{
                                                                                                                                                        prompt:"Where do you aim your fury?",
                                                                                                                                                        options:[
                                                                                                                                                            {
                                                                                                                                                                choice:"Neck",
                                                                                                                                                                next:{
                                                                                                                                                                    prompt:"Aiming at his neck you put all your strength into your swing.",
                                                                                                                                                                    next:{
                                                                                                                                                                        prompt:"The sword connects with its target!",
                                                                                                                                                                        next:{
                                                                                                                                                                            prompt:"Unfortunately dragon hide is stronger then steel.",
                                                                                                                                                                            next:{
                                                                                                                                                                                prompt:"You sword breaks and you are left unarmed.",
                                                                                                                                                                                next:{
                                                                                                                                                                                    prompt:"The dragon eats you.",
                                                                                                                                                                                    next:{
                                                                                                                                                                                        prompt:"You have died!",
                                                                                                                                                                                        owner:"bot-evil"
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                choice:"Mouth",
                                                                                                                                                                next:{
                                                                                                                                                                    prompt:"Heroically you jump towards the dragon's mouth.",
                                                                                                                                                                    next:{
                                                                                                                                                                        prompt:"You are promptly eaten.",
                                                                                                                                                                        next:{
                                                                                                                                                                            prompt:"You have died!",
                                                                                                                                                                            owner:"bot-evil"
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                choice:"Eye",
                                                                                                                                                                next:{
                                                                                                                                                                    prompt:"Looking like the weakest point you stab the dragon right in the eye!",
                                                                                                                                                                    next:{
                                                                                                                                                                        prompt:"The dragon screams in pain and confusion.",
                                                                                                                                                                        next:{
                                                                                                                                                                            prompt:"He stumbles about the cave unaware he is moving towards the giant ravine right behind him which I the narrator totally mentioned earlier!",
                                                                                                                                                                            next:{
                                                                                                                                                                                prompt:"He falls in, plummeting into the abyss, never to be seen again.",
                                                                                                                                                                                next:{
                                                                                                                                                                                    prompt:"You did it!",
                                                                                                                                                                                    next:{
                                                                                                                                                                                        prompt:"You killed the dragon!",
                                                                                                                                                                                        next:{
                                                                                                                                                                                            prompt:"Now you can save the princess.",
                                                                                                                                                                                            next:{
                                                                                                                                                                                                prompt:"You run deeper into the cave where you find her waiting.",
                                                                                                                                                                                                next:{
                                                                                                                                                                                                    prompt:"Actually you find four princesses.",
                                                                                                                                                                                                    next:{
                                                                                                                                                                                                        prompt:"Each asleep on their own pedestals.",
                                                                                                                                                                                                        next:{
                                                                                                                                                                                                            prompt:"All of them look like your beloved, the only difference is their dress colors.",
                                                                                                                                                                                                            next:{
                                                                                                                                                                                                                prompt:"It seems the witch has left one last trick for you.",
                                                                                                                                                                                                                next:{
                                                                                                                                                                                                                    prompt:"Which princess do you wake?",
                                                                                                                                                                                                                    options:[
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            choice:"Red",
                                                                                                                                                                                                                            next:{
                                                                                                                                                                                                                                prompt:"You decide to wake the red princess.",
                                                                                                                                                                                                                                next:{
                                                                                                                                                                                                                                    prompt:"You gently try to shake her awake, but the moment you touch her, your hands engulf into flames!",
                                                                                                                                                                                                                                    next:{
                                                                                                                                                                                                                                        prompt:"Slowly the flames spread to your whole body!",
                                                                                                                                                                                                                                        next:{
                                                                                                                                                                                                                                            prompt:"You stop drop and roll but there's no point.",
                                                                                                                                                                                                                                            next:{
                                                                                                                                                                                                                                                prompt:"You have died!",
                                                                                                                                                                                                                                                owner:"bot-evil"
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            choice:"Green",
                                                                                                                                                                                                                            next:{
                                                                                                                                                                                                                                prompt:"You decide to wake the green princess.",
                                                                                                                                                                                                                                next:{
                                                                                                                                                                                                                                    prompt:"You gently try to shake her awake, but the moment you touch her, your fingers begin to melt!",
                                                                                                                                                                                                                                    next:{
                                                                                                                                                                                                                                        prompt:"Then your hands begin to melt!",
                                                                                                                                                                                                                                        next:{
                                                                                                                                                                                                                                            prompt:"Then your arms melt!",
                                                                                                                                                                                                                                            next:{
                                                                                                                                                                                                                                                prompt:"Before you know it you've melted!",
                                                                                                                                                                                                                                                next:{
                                                                                                                                                                                                                                                    prompt:"You have died!",
                                                                                                                                                                                                                                                    owner:"bot-evil"
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            choice:"Pink",
                                                                                                                                                                                                                            next:{
                                                                                                                                                                                                                                prompt:"You decide to wake the pink princess.",
                                                                                                                                                                                                                                next:{
                                                                                                                                                                                                                                    prompt:"You gently try to shake her awake, and to your relief she wakes!",
                                                                                                                                                                                                                                    next:{
                                                                                                                                                                                                                                        prompt:"You've done it!",
                                                                                                                                                                                                                                        next:{
                                                                                                                                                                                                                                            prompt:"You've saved the princess!",
                                                                                                                                                                                                                                            next:{
                                                                                                                                                                                                                                                prompt:"At long last you embrace your beloved!",
                                                                                                                                                                                                                                                next:{
                                                                                                                                                                                                                                                    prompt:"Together you return home and live happily ever after.",
                                                                                                                                                                                                                                                    next:{
                                                                                                                                                                                                                                                        prompt:"The End",
                                                                                                                                                                                                                                                        owner:"bot-good"
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            choice:"Orange",
                                                                                                                                                                                                                            next:{
                                                                                                                                                                                                                                prompt:"You decide to wake the orange princess.",
                                                                                                                                                                                                                                next:{
                                                                                                                                                                                                                                    prompt:"You gently try to shake her awake, but the moment you touch her...",
                                                                                                                                                                                                                                    next:{
                                                                                                                                                                                                                                        prompt:"A lion jumps out from behind her and mauls you to death!",
                                                                                                                                                                                                                                        next:{
                                                                                                                                                                                                                                            prompt:"You have died!",
                                                                                                                                                                                                                                            owner:"bot-evil"
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    ]
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                choice:"Stomach",
                                                                                                                                                                next:{
                                                                                                                                                                    prompt:"Aiming at his stomach you put all your strength into your swing.",
                                                                                                                                                                    next:{
                                                                                                                                                                        prompt:"The sword connects with its target!",
                                                                                                                                                                        next:{
                                                                                                                                                                            prompt:"Unfortunately dragon hide is stronger then steel.",
                                                                                                                                                                            next:{
                                                                                                                                                                                prompt:"You sword breaks and you are left unarmed.",
                                                                                                                                                                                next:{
                                                                                                                                                                                    prompt:"The dragon eats you.",
                                                                                                                                                                                    next:{
                                                                                                                                                                                        prompt:"You have died!",
                                                                                                                                                                                        owner:"bot-evil"
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        ]
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                },
                                                                                                                {
                                                                                                                    choice:"Ask for a pen",
                                                                                                                    next:{
                                                                                                                        prompt:"You ask the dragon for a pen.",
                                                                                                                        next:{
                                                                                                                            prompt:"The dragon responds by eating you.",
                                                                                                                            next:{
                                                                                                                                prompt:"You have died!",
                                                                                                                                owner:"bot-evil"
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                },
                                                                                                                {
                                                                                                                    choice:"Die",
                                                                                                                    next:{
                                                                                                                        prompt:"You Die",
                                                                                                                        next:{
                                                                                                                            prompt:"You have died!",
                                                                                                                            owner:"bot-evil"
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    choice:"George the Gorgeous",
                                                                                    next:{
                                                                                        prompt:"You are so overwhelmed by the dragon's presence that you can't even remember you own name.",
                                                                                        next:{
                                                                                            prompt:"Unable to do anything right, you are eaten, failing your quest.",
                                                                                            next:{
                                                                                                prompt:"You have died!",
                                                                                                owner:"bot-evil"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    choice:"Frank the Faithful",
                                                                                    next:{
                                                                                        prompt:"You are so overwhelmed by the dragon's presence that you can't even remember you own name.",
                                                                                        next:{
                                                                                            prompt:"Unable to do anything right, you are eaten, failing your quest.",
                                                                                            next:{
                                                                                                prompt:"You have died!",
                                                                                                owner:"bot-evil"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
            
        
    


};

