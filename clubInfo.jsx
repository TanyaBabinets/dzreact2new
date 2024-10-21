class ClubInfo extends React.Component {
    render() {
        const { club } = this.props;
        return (
            <div id="info">        
                <img src={club.logo} alt={`${club.name} logo`} style={{ width: '150px', height: '150px' }}т></img>
                <h2>{club.name}</h2>
                <p>City:{club.city}</p>
                <p>Founded: {club.founded}</p>
                
            </div>
        );
    }
}