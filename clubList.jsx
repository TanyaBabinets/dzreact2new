
class ClubList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedClub: null, //будет выбран клуб
            showRewards: false,
            showTeam: false,
            clubs: this.props.data.clubs || [],
            backgroundImage: '',
        };


    }
    clubSelect = (club) => {
        console.log(club);
        this.setState({ selectedClub: club });
    };

    toggleRewards = () => {

        this.setState((prevState) => ({
            showRewards: !prevState.showRewards,
            backgroundImage: !prevState.showRewards ? '/img/cup6.jpeg' : '',
        }),
            () => {
                if (!this.state.showRewards) {
                    document.body.style.backgroundImage = '';//сброс картинки фона 
                }
            });
    };


    toggleTeam = () => {
        this.setState((prevState) => ({
            showTeam: !prevState.showTeam,
            backgroundImage: !prevState.showTeam ? '/img/futteam.jpg' : '',
        }),
            () => {
                if (!this.state.showTeam) {
                    document.body.style.backgroundImage = '';//сброс картинки фона 
                }
            });
    };
    ///смена фона
    componentDidUpdate(prevProps, prevState) {
        if (this.state.backgroundImage !== prevState.backgroundImage) {
            if (this.state.backgroundImage === '') {
                document.body.style.backgroundImage = '';//сброс стартовой картинки
            } else {
                document.body.style.backgroundImage = `url(${this.state.backgroundImage})`;
            }
           
        }
    }
    render() {



        const { clubs, selectedClub, showRewards, showTeam } = this.state;

        return (
            <div id="list">
                <h2>{this.props.data.title}</h2>

                <ul>
                    {clubs.map((club, index) => (

                        <li key={index} onClick={() => this.clubSelect(club)} style={{ cursor: 'pointer' }}>
                            {club.name}
                        </li>

                    ))}
                </ul>

                {selectedClub && (
                    <div>
                        <ClubInfo club={selectedClub} />
                        <button onClick={this.toggleRewards}>REWARDS</button>
                        <button onClick={this.toggleTeam}>TEAM</button>
                    </div>
                )}

                {showRewards && (
                    <div className="modal">
                        <div class="modalContent">
                            <ClubRewards rewards={selectedClub.rewards || []} />
                            <button onClick={this.toggleRewards}>Close</button>
                        </div>
                    </div>
                )}
                {showTeam && (
                    <div className="modal">
                        <div class="modalContent">
                            <ClubTeam players={selectedClub.players || []} />
                            <button onClick={this.toggleTeam}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

