import PeopleList from "../ui/PeopleList";

const persons = [{

      firstName: 'Kevin',
      lastName: 'Hawkings',
      dodId: 1232343459
    },
    {
      firstName: 'Jacob',
      lastName: 'Fields',
      dodId: 5555555555          
    }
]

export default function Page(){
    return(
        <PeopleList people={persons}/>
    )
}