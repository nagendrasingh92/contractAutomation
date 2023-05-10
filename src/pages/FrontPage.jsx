import './frontPage.scss'
function FrontPage() {
  return (
    <>
      <div className='frontPageWrap'>
        <div className='frontPageContent'>
          <div>
            <h2>The Contract Automation Platform</h2>
          </div>
          <div className='frontPageLink'>
            <a href="/contractList" className='link'>Contracts</a>
            <a href="/customerList" className='link'>Customers</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default FrontPage;