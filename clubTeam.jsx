class ClubTeam extends React.Component {
    render() {
        const { players } = this.props;
        if (!Array.isArray(players)) {
            return null;
        }
        return (
            <div>
                <h2>Current team</h2>
                <ul>
                    {players.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))}
                </ul>
            </div>
        );
    }
}