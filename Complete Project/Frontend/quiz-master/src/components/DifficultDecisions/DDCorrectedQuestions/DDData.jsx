export const DDData = [
  {
    questions: [
      {
        situationIndex1: "1",
        situationQuestion1:
          "You are one of three production area managers for a medium-sized manufacturing firm.  You have 5 teams of 10 members each, including 5 team leaders who report to you.  The annual maintenance for the machinery is scheduled for your area next Wednesday and Thursday.  This maintenance is extremely important and requires shutting down operations in your area for 2 days.  However, the Sales Department just informed you that a senior executive group from an important potential customer will be at the plant to tour the production facility next Thursday.  This is a very prestigious and large company and could turn into one of your company's largest accounts.",
        situationIndex2: "",
        situationQuestion2:
          "The annual maintenance was scheduled 6 months ago, and it requires 2 straight days to accomplish.  If you cancel or postpone the maintenance, it will affect all 5 teams as well as some of the other areas in the plant and create an inconvenience for everyone.  Besides, many of the team members have already scheduled vacation for these two days.",
        A: "Ask your team members/leaders what they think should be done.",
        O: [
          {
            value:
              "Tell the sales department that you will be conducting your annual maintenance that day and that they should either try and reschedule the tour, or explain to the potential customer about the maintenance and proceed with the walk-thru.",
            idx: "1",
          },
          {
            value:
              "Try and postpone maintenance for a few days and coordinate with other managers and your team members/leaders.",
            idx: "2",
          },
          {
            value:
              "Ask your team members/leaders what they think should be done.",
            idx: "3",
          },
          {
            value:
              "Talk to other area managers and see what they think should be done.",
            idx: "4",
          },
          {
            value:
              "Talk to other area managers and see what they think should be done.",
            idx: "5",
          },
        ],
        Olength: 5,
      },
      {
        situationIndex1: "2",
        situationQuestion1:
          "Continuing on with the previous situation (the complete text is shown below), let's assume that you decided to continue with the maintenance program.  Rank the following approaches listed below.",
        situationIndex2: "Situation 1 Text",
        situationQuestion2:
          "You are one of three production area managers for a medium-sized manufacturing firm.  You have 5 teams of 10 members each, including 5 team leaders who report to you.  The annual maintenance for the machinery is scheduled for your area next Wednesday and Thursday.  This maintenance is extremely important and requires shutting down operations in your area for 2 days.  However, the Sales Department just informed you that a senior executive group from an important potential customer will be at the plant to tour the production facility next Thursday.  This is a very prestigious and large company and could turn into one of your company's largest accounts. " +
          "\n" +
          "The annual maintenance was scheduled 6 months ago, and it requires 2 straight days to accomplish.  If you cancel or postpone the maintenance, it will affect all 5 teams as well as some of the other areas in the plant and create an inconvenience for everyone.  Besides, many of the team members have already scheduled vacation for these two days.",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Call the person from Sales that originally contacted you and tell him/her about your decision.",
          },
          {
            idx: "2",
            value:
              "Write a memo to Sales informing them that you've decided to continue with the maintenance program.  Make sure to copy to your boss on the memo.",
          },
          {
            idx: "3",
            value:
              "Ask your boss what she thinks the best way to communicate your decision is.",
          },
          {
            idx: "4",
            value:
              "Ask your boss to contact Sales and tell Sales that continuing on with maintenance is the right thing to do.",
          },
          {
            idx: "5",
            value:
              "Avoid contacting Sales and just make sure that you are there when the executive group goes through so you can explain the situation to them personally.",
          },
        ],
        Olength: 5,
      },
      {
        situationIndex1: "3",
        situationQuestion1:
          "Continuing on with the first situation, regarding the conflict between the tour and maintenance (the complete text is shown below), let's assume that you decided to try and postpone the maintenance program so that the tour could go on as planned.  Rank the following approaches listed below.",
        situationIndex2: "Situation 1 Text",
        situationQuestion2:
          "You are one of three production area managers for a medium-sized manufacturing firm.  You have 5 teams of 10 members each, including 5 team leaders who report to you.  The annual maintenance for the machinery is scheduled for your area next Wednesday and Thursday.  This maintenance is extremely important and requires shutting down operations in your area for 2 days.  However, the Sales Department just informed you that a senior executive group from an important potential customer will be at the plant to tour the production facility next Thursday.  This is a very prestigious and large company and could turn into one of your company's largest accounts. " +
          "\n" +
          "The annual maintenance was scheduled 6 months ago, and it requires 2 straight days to accomplish.  If you cancel or postpone the maintenance, it will affect all 5 teams as well as some of the other areas in the plant and create an inconvenience for everyone.  Besides, many of the team members have already scheduled vacation for these two days.",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Contact your boss and ask her how best to coordinate this change with maintenance and the other area managers.",
          },
          {
            idx: "2",
            value:
              "Send a memo to all area managers and maintenance saying that you've decided to postpone maintenance so as to meet the needs of a prospective customer.",
          },
          {
            idx: "3",
            value:
              "Contact maintenance, tell them about your dilemma and ask them for possible dates to reschedule.",
          },
          {
            idx: "4",
            value:
              "Inform your team leaders and have them schedule a new date with maintenance and also reschedule vacations accordingly.",
          },
        ],
        Olength: 4,
      },
      {
        situationIndex1: "4",
        situationQuestion1:
          "You are the group leader of a production line that installs picture tubes for TVs.  The other day, the quality control department informed you that there have been a lot of defective TVs produced on your line.  From the description of the defect, it sounds like a solder problem (i.e., bad wire connections).  You informed the group leader, responsible for wire soldering, of the problem; however, he responded very defensively and told you maybe it's a problem in your area.  How would you respond to him?",
        situationIndex2: "",
        situationQuestion2: "",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Hey, don't be so defensive.  I just told you so that you would know, and maybe you can check it out before the boss gets real upset!",
          },
          {
            idx: "2",
            value:
              "I know it's not my section.  I checked into it already.  It's definitely because your people are incorrectly soldering the wires.  You need to look into it.",
          },
          {
            idx: "3",
            value:
              "Let's try to solve this problem together instead of trying to figure out whose fault it is.  The QC data indicates it's probably a soldering problem, so I thought that you'd want to know about it.",
          },
          {
            idx: "4",
            value:
              "I'm just trying to help before you get into trouble.  I don't mean to point a finger at you or anything like that.  I just wanted to let you know about it.",
          },
          {
            idx: "5",
            value:
              "I don't mean to offend you.  I just think we need to find the problem as soon as we can.",
          },
        ],
        Olength: 5,
      },
      {
        situationIndex1: "5",
        situationQuestion1:
          "You are a group leader in the packaging area.  Recently you noticed that one of your teams seems to use more packing material than the other teams.  You advised the team leader, Jim, and asked him to watch more closely the use of the packing material.  However, the amount of packing material used by that team has not decreased at all.",
        situationIndex2: "",
        situationQuestion2: "",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Jim, I talked with you about the material usage weeks ago, but nothing has changed.  What's going on?  Are you trying to fix this problem at all?",
          },
          {
            idx: "2",
            value:
              "Jim, I'm sure you've been trying, but it doesn't seem like the material usage has decreased since we talked.  Let's sit down and try to figure out what's going wrong.",
          },
          {
            idx: "3",
            value:
              "Jim, I need you to really try to decrease the usage of the packing material to get it back to the standard soon.  Otherwise we will have to think about some further action to solve this problem.",
          },
          {
            idx: "4",
            value:
              "Jim, let's sit down and talk about what actions you have been taking to solve this packing material usage problem.",
          },
          {
            idx: "5",
            value:
              "Jim, I'm sure you've tried but it seems like you can't handle this problem yourself.  Call up your team members and let's all get together to talk about fixing this situation.",
          },
        ],
        Olength: 5,
      },
      {
        situationIndex1: "6",
        situationQuestion1:
          "You are a group leader in the packaging area.  You noticed that one of your teams seems to be less productive than the other teams.  When you talked to the team leader, Gary, about it, he told you that he's got a couple team members who talk a lot during their shift and slow things down.  He also told you that he tried to talk to them about it, but they don't seem to change much.",
        situationIndex2: "",
        situationQuestion2: "",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Gary, you have to be a lot tougher with these two.  Tell them to stop talking so much or else they need to see me about it.",
          },
          {
            idx: "2",
            value:
              "Gary, you need to have a team meeting to talk about the productivity and safety.  Explain to every team member that the productivity of the team has been dropping and discuss what could be done to improve productivity as a team.",
          },
          {
            idx: "3",
            value:
              "Gary, talk to these two frankly about their behavior.  Explain to them that we have high production goals and need to work as hard as possible to meet the goal as a team.  Ask for their cooperation on this matter.",
          },
          {
            idx: "4",
            value:
              "Gary, I'll talk to them about their behavior.  You stay with me and watch how I handle it.",
          },
          {
            idx: "5",
            value:
              "Gary, talk to them individually about their behavior and ask them to stop talking so much because it affects the team productivity.",
          },
        ],
        Olength: 5,
      },
      {
        situationIndex1: "7",
        situationQuestion1:
          "You are a team leader of a production team with 20 team members.  Although you've been trying to get everyone cross-trained on every piece of equipment, there are only 2 people certified on the ACME pressing machine, Rachel and David.  Rachel called in sick today and David came into work late today, for the third time this month.  According to team rules, that is an automatic, immediate one-day suspension.  A lot of the other team members are frustrated with David's behavior because they think he's using his ability to work on the pressing machine to get around team rules.  Although you have enough team members to cover all the positions without David and Rachel, no one else is certified on the pressing machine.",
        situationIndex2: "",
        situationQuestion2: "",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Send David home on a one-day suspension even though you know it will cause production problems.  You need to set an example.",
          },
          {
            idx: "2",
            value:
              "Tell David in front of the other team members that coming in late is not going to be tolerated by anyone.  Let him work today but suspend him as soon as Rachel comes back into work.",
          },
          {
            idx: "3",
            value:
              "Talk to David in private and let him know that coming in late is not going to be tolerated by anyone.  Let him work today but suspend him as soon as Rachel comes back into work.",
          },
          {
            idx: "4",
            value:
              "Talk to David in private and explain to him the importance of coming in on time.  Listen to his reason for coming in late.  Tell him that he needs to work as a member of the team.  Don't suspend him this time, however.",
          },
          {
            idx: "5",
            value:
              "Have a team meeting explaining the importance of coming in on time.  Assign some other team member to work with David on the pressing machine so that he/she can get certified.  When the person is certified, suspend David one day.",
          },
        ],
        Olength: 5,
      },
      {
        situationIndex1: "8",
        situationQuestion1:
          "You are a team leader of a team of 15 individuals.  This is a very new facility and everyone, including you, was hired with the intention of working in a high involvement, team-based environment.  The start-up process has been very hectic although very rewarding as well.  The level of team moral is high and the team members are all happy about being able to make a lot of the decisions that affect them.",
        situationIndex2: "",
        situationQuestion2:
          "There are some negative things that have come out of this start-up process, however.  One is that your team has the view that empowerment means that they get to make all of the decisions, and because of that, they don't really listen to management.  Further, they view any attempts by management to change production processes or increase productivity goals as intruding on their decision-making ability.  You feel that you have really lost control of the team.  For example, the team is having private meetings without you, the team leader.  Production and quality are going well right now and the plant manager doesn't seem to be aware of, or concerned about, the situation with the team.",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Have a team meeting telling them that you are the team leader, and  although they are a team, not everyone has the same authority.  Sometimes decisions will be made without their involvement.",
          },
          {
            idx: "2",
            value:
              "Talk to your boss (the plant manager) and tell her that you'd like her to talk with your team about the role of teams and management in the plant.",
          },
          {
            idx: "3",
            value:
              "Have a team meeting and explain your frustrations and concerns to the team and ask them what they think should be done.",
          },
          {
            idx: "4",
            value:
              "Have a team meeting and explain  your understanding of the idea of a team concept.  Explain that empowerment doesn't mean that only the team can make decisions.   Tell them they need to be more open to ideas from others outside the team.",
          },
          {
            idx: "5",
            value:
              "Talk to each team member individually and gain their commitment to be more flexible in working with you and the management team, and not against you.",
          },
        ],
        Olength: 5,
      },
      {
        situationIndex1: "9",
        situationQuestion1:
          "Assume that the same scenario as described in the previous situation (see Situation 8 text below) applies, although now productivity and quality are well behind the ramp-up schedule established for the plant.  The plant manager and upper management are very concerned about the situation.  You feel that the team's attitude is related to this low productivity.",
        situationIndex2: "Situation 8 Text",
        situationQuestion2:
          "You are a team leader of a team of 15 individuals.  This is a very new facility and everyone, including you, was hired with the intention of working in a high involvement, team-based environment.  The start-up process has been very hectic although very rewarding as well.  The level of team moral is high and the team members are all happy about being able to make a lot of the decisions that affect them." +
          "\n" +
          "There are some negative things that have come out of this start-up process, however.  One is that your team has the view that empowerment means that they get to make all of the decisions, and because of that, they don't really listen to management.  Further, they view any attempts by management to change production processes or increase productivity goals as intruding on their decision-making ability.  You feel that you have really lost control of the team.  For example, the team is having private meetings without you, the team leader.  Production and quality are going well right now and the plant manager doesn't seem to be aware of, or concerned about, the situation with the team.",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Have a meeting and tell the team about the quality and productivity problems, and ask them for ideas about how to improve performance.",
          },
          {
            idx: "2",
            value:
              "Have the plant manager talk to the team about the productivity and quality problems, and hope that this will motivate them to change their behavior.",
          },
          {
            idx: "3",
            value:
              "Tell the team that things are not working out well right now and that until productivity increases they are going to have less of a role in decision making.",
          },
          {
            idx: "4",
            value:
              "Have a team meeting and explain  your understanding of the idea of a team concept.  Explain that empowerment doesn't mean that only the team can make decisions.   Tell them they need to be more open to ideas from others outside the team.",
          },
          {
            idx: "5",
            value:
              "Talk to each team member individually and try to gain their commitment to be more flexible, and to work to improve productivity and quality.",
          },
        ],
        Olength: 5,
      },
      {
        situationIndex1: "10",
        situationQuestion1:
          "You are the district manager for a large retail chain and have been for just over 1 year.  There are 8 stores that are under your responsibility.  The entire organization is strongly pushing to be more empowering, and shift control down to the people on the floor and the floor supervisors as a means of better serving the customer.  You firmly believe that this is the right strategy for helping your store survive in a highly competitive market.  You have been communicating this message strongly to each store manager and everyone in your region since you took your position.  You were originally hired from another large retail chain because of your reputation as someone who has a clear vision and can make dramatic improvements." +
          "\n" +
          "One of the store managers, Bill, is really not the type of manager that you would like to have in the organization.  The reason is that he is extremely domineering, and creates strategic alliances with people that can help him, while punishing those who go against him.  He has created his own little empire within the store and has essentially turned all of the supervisors into his servants.  No one takes any action or initiative unless it is first approved by Bill.  He has been store manager for 8 years.  He has been with the company, starting as a salesperson, for over 15 years.",
        situationIndex2: "",
        situationQuestion2:
          "Despite his shortcomings, Bill's store sales rank among the highest in your district, and in fact, in the entire region.  You believe that it's purely because of the store's location and that the store is able to keep a high sales volume in spite of Bill and not because of him." +
          "\n" +
          "At some of the meetings you've had with the store managers, Bill has made it clear that he is not in favor of this 'empowerment thing', calling it a fad that will come and go.  He is openly trying to win the support of the other store managers to his view, and is clearly trying to undermine your authority.  You've heard from two store managers that Bill has asked them to resist this empowerment effort.  Bill is a strong personality with a lot of connections and you're sure that at least 2 or 3 other store managers are going to go along with him, because they are afraid of him, if for no other reason.  You are sure that he is trying to sabotage your efforts.",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Have a one-on-one meeting with Bill and let him know that you will be strongly pushing this empowerment movement, and  you expect him to work with you on this.  Acknowledge that you know he doesn't totally agree with you but that you need his support.",
          },
          {
            idx: "2",
            value:
              "Hold another meeting with your store managers and openly discuss potential differences of opinion regarding empowerment and store management philosophy.  Try to clear the air and let everyone express his or her views openly, but make sure everyone understands your commitment.",
          },
          {
            idx: "3",
            value:
              "Talk to your boss, the regional manager and ask for her advice about the situation and her experience with Bill.",
          },
          {
            idx: "4",
            value:
              "Try and work to quietly remove Bill by building support with your boss and others associated with the situation.  This will likely take at least 6-12 months.",
          },
          {
            idx: "5",
            value:
              "Offer Bill the opportunity to work as the head of a task force to implement the empowerment effort.  This will hopefully satisfy his ego and also place him in a position where he has to work with you on the effort.",
          },
          {
            idx: "6",
            value:
              "Talk with Bill and let him know in no uncertain terms that you are very frustrated with his tactics and you expect him to support you in this effort or seek employment elsewhere.",
          },
        ],
        Olength: 6,
      },
      {
        situationIndex1: "11",
        situationQuestion1:
          "This is a continuation of the previous item (Situation 10 text is shown below).  Let's assume that you decided to have a talk with Bill and he agreed that he would work with you to help implement the process.  He was very nice during the meeting and seemed to have very few objections." +
          "\n" +
          "After 3 months it has become clear that Bill has done nothing but continue to sabotage the move towards empowerment.  He has continued talking with other store managers and supervisors about how this empowerment effort will never work and that they should stick with him and not do anything to move in that direction.  You've noticed that there is a great deal of dissension among your store managers and two clear goups are starting to emerge because of Bill's efforts, one that supports the effort (about 5) and 3 that aren't doing anything and continue to try and resist any movement in that direction.  It's very disturbing because even the 5 store managers who support the effort are becoming disillusioned and frustrated with Bill's efforts.",
        situationIndex2: "Situation 10 Text",
        situationQuestion2:
          "You are the district manager for a large retail chain and have been for just over 1 year.  There are 8 stores that are under your responsibility.  The entire organization is strongly pushing to be more empowering, and shift control down to the people on the floor and the floor supervisors as a means of better serving the customer.  You firmly believe that this is the right strategy for helping your store survive in a highly competitive market.  You have been communicating this message strongly to each store manager and everyone in your region since you took your position.  You were originally hired from another large retail chain because of your reputation as someone who has a clear vision and can make dramatic improvements." +
          "\n" +
          "One of the store managers, Bill, is really not the type of manager that you would like to have in the organization.  The reason is that he is extremely domineering, and creates strategic alliances with people that can help him, while punishing those who go against him.  He has created his own little empire within the store and has essentially turned all of the supervisors into his servants.  No one takes any action or initiative unless it is first approved by Bill.  He has been store manager for 8 years.  He has been with the company, starting as a salesperson, for over 15 years." +
          "\n" +
          "Despite his shortcomings, Bill's store sales rank among the highest in your district, and in fact, in the entire region.  You believe that it's purely because of the store's location and that the store is able to keep a high sales volume in spite of Bill and not because of him." +
          "\n" +
          "At some of the meetings you've had with the store managers, Bill has made it clear that he is not in favor of this 'empowerment thing', calling it a fad that will come and go.  He is openly trying to win the support of the other store managers to his view, and is clearly trying to undermine your authority.  You've heard from two store managers that Bill has asked them to resist this empowerment effort.  Bill is a strong personality with a lot of connections and you're sure that at least 2 or 3 other store managers are going to go along with him, because they are afraid of him, if for no other reason.  You are sure that he is trying to sabotage your efforts.",
        A: "Agree",
        O: [
          {
            idx: "1",
            value:
              "Have a one-on-one meeting with Bill and let him know that you will be strongly pushing this empowerment movement, and  you expect him to work with you on this.  Acknowledge that you know he doesn't totally agree with you but that you need his support.",
          },
          {
            idx: "2",
            value:
              "Hold another meeting with your store managers and openly discuss potential differences of opinion regarding empowerment and store management philosophy.  Try to clear the air and let everyone express his or her views openly, but make sure everyone understands your commitment.",
          },
          {
            idx: "3",
            value:
              "Talk to your boss, the regional manager and ask for her advice about the situation and her experience with Bill.",
          },
          {
            idx: "4",
            value:
              "Try and work to quietly remove Bill by building support with your boss and others associated with the situation.  This will likely take at least 6-12 months.",
          },
          {
            idx: "5",
            value:
              "Find some means of getting rid of Bill, either through a transfer, a demotion or offering a severance package and letting him go.  Make sure that everyone knows that this empowerment effort is not a fad and  you and the company are very serious about making sure it's a success.",
          },
          {
            idx: "6",
            value:
              "Talk with Bill and let him know in no uncertain terms that you are very frustrated with his tactics and you expect him to support you in this effort or seek employment elsewhere.",
          },
        ],
        Olength: 6,
      },
      {
        situationIndex1: "End",
        situationQuestion1: "",
        situationIndex2:
          "You Have completed this Quiz, now click on 'Submit' Button to submit the quiz!",
        situationQuestion2: "",
        A: "",
        O: [],
        Olength: 0,
      },
    ],
  },
];
