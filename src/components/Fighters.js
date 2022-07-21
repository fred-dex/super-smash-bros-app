

const Fighters = ({ fighters, setSelectedFighter }) => {
    return (
        <div style={{backgroundColor: fighters.color}} onClick={() => {setSelectedFighter(fighters.name)}}>
        <img src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighters.name.toLowerCase()}.png`} className='fighter-img'/>
        <h5 className='fighter-name'>{fighters.name}</h5>
        </div>
    )
}
export default Fighters