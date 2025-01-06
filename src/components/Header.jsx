import chefClaudeIcon from '../assets/chef-claude-icon.png'

export default function Header() {
  return (
    <header>
      <img
        src={chefClaudeIcon}
        alt='robot chef icon'
      />
      <h1>Chef Claude</h1>
    </header>
  )
}