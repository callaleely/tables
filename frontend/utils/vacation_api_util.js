export const fetchVacations = () => (
    $.ajax({
        method: "GET",
        url: `api/vacations`
    })
)

export const fetchVacation = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/vacations/${id}`
    })
)

export const createVacation = vacation => (
    $.ajax({
        method: 'POST',
        url: `api/vacations`,
        data: { vacation }
    })
)

export const updateVacation = vacation => (
    $.ajax({
        method: 'PATCH',
        url: `api/vacations/${vacation.id}`,
        data: { vacation }
    })
)

export const deleteVacation = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/vacations/${id}`
    })
)