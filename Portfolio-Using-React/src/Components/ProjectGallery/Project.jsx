

export default function Project({item}){
const displayCard = () => {
return (
    <div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">{item.projectName}</h5>
    <p className="card-text">{item.description}</p>
    <a href="#" className="card-link">GitHub link</a>
    <a href="#" className="card-link">Deployed link</a>
  </div>
</div>
)
}
    return (
        <li className="list-group-item">
            <button type="button" onClick={displayCard}>{item.projectName}</button>
          </li>
    )
}