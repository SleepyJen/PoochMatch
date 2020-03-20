<div>
    {value.people.map((person, index) => (
        <Card className="card" flex-row flex-wrap key={index} style={{ width: '29rem' }}>

            <ProfilePic img={value.imgs[index]} />
            <Card.Body classname="card-block px-2" >
                <Card.Title><h5>{person.firstName} {person.lastName}</h5></Card.Title>
                <Card.Text>
                    <Interests _id={person._id}></Interests>
                    <a href={`/profile?user_profile=${person._id}`} className="btn btn-primary">View website</a>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    ))}

</div>


    <div>
        {value.people.map((person, index) => (
            <div className="card" key={index}>
                <div className="image">
                    <ProfilePic img={value.imgs[index]} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{person.firstName} {person.lastName}</h5>
                    <Interests _id={person._id} />
                    <a href={`/profile?user_profile=${person._id}`} className="btn btn-primary">View website</a>
                </div>
            </div>
        ))}
        <br></br>
    </div>