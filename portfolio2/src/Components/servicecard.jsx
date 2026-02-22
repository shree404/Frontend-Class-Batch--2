function ServiceCard({servicelist , indexx}){
    return(
        <>
        <div key={indexx}>
            {/* {servicelist.map((service , index) => ( */}
                <div>
            <div>{servicelist.icon}</div>
            <h2>{servicelist.title}</h2>
            <ul>
                {(servicelist.services).map ((service , index) => (
                    <li key={index}>{service}</li>
                ))}
                
            </ul>
        </div>

            {/* ) )} */}
        
        </div>
        </>
    )
}

export default ServiceCard;