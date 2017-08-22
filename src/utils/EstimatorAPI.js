const EstimatorAPI = {
  
  const payload = [
    { 
      orgName : 'FirstPerson',
      projects: [
        {projName: 'Estimator', code: '1PL', client: 'First Person', status: 'Active', number: 4137},
        {projName: 'DC_Summit', code: 'ATL', client: 'Atlassian', status: 'Active', number: 4168},
        {projName: 'AMP_Launch', code: 'CIS', client: 'Cisco', status: 'Active', number: 4079},
        {projName: 'AWEA_2016', code: 'GEC', client: 'General Electric', status: 'Active', number: 4234},
        {projName: 'Predix_UI', code: 'GEC', client: 'General Electric', status: 'Active', number: 6745},
        {projName: 'Kimpton Road Show', code: 'KIM', client: 'Kimpton', status: 'Active', number: 2345},
      ]
    }, 
    {
      orgName: 'Google'
      projects: [
      ]
    }
  ]
  all: function() { return this.payload}
  // get: function(id) {
  //   const isProject = p => p.number === id;
  //   return this.projects.find(isProject)
  // }
}

export default EstimatorAPI
