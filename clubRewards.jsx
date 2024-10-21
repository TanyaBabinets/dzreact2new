class ClubRewards extends React.Component {
    render() {
        const { rewards } = this.props;
        if (!Array.isArray(rewards)) {
            return null; 
        }
        return (
            
            <div>
                <h2>Achivements</h2>
                <ul>
                    {rewards.map((reward, index) => (
                        <li key={index}>{reward}</li>
                    ))}
                </ul>
            </div>
        );
    }
}