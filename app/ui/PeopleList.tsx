interface Person {
  firstName: string;
  lastName: string;
  dodId: number;
}

function listPeople( person :Person){
    return(
        <div>
            <h3>
                {person.firstName + " " + person.lastName}
            </h3>
            <p>
                ID: {person.dodId}
            </p>
        </div>
    )
}

export default function PeopleList( { people } : {people: Person[]} ):React.ReactNode{
    return(
        <>
            {people.map(listPeople)}
        </>
    );
}

export function PeopleListConcise( { people } : {people: Person[]} ):React.ReactNode{
    return(
        <>
            {people.map(( person :Person) =>
                <div>
                    <h3>{person.firstName + " " + person.lastName}</h3>
                    <p>ID: {person.dodId}</p>
                </div>
            )}
        </>
    );
}

