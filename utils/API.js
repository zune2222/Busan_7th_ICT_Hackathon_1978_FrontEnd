import axios from 'axios'

export const API_URL = process.env.REACT_APP_API_URL

export async function ajax(options) {
    try {
        const response = await axios(options)
        return { success: true, data: response.data }
    } catch (error) {
        return { success: false, data: error.response.data }
    }
}

async function signIn({ id, password }) {
    const options = {
        method: 'POST',
        url: `${API_URL}/signIn`,
        data: { id, password },
    }
    return ajax(options)
}

async function signUp({
    id,
    password,
    nickname,
    job,
    major,
    gender,
    birthDay,
}) {
    const options = {
        method: 'POST',
        url: `${API_URL}/signUp`,
        data: { id, password, nickname, job, major, gender, birthDay },
    }
    return ajax(options)
}

async function getDailyLog({ userId, date, accessToken }) {
    const options = {
        method: 'GET',
        url: `${API_URL}/auth/user/${userId}/dailyLog?date=${date}`,
        headers: {
            Authorization: accessToken,
        },
    }
    return ajax(options)
}

async function getCalendar({ userId, month, accessToken }) {
    const options = {
        method: 'GET',
        url: `${API_URL}/auth/user/${userId}/calendar/${month}`,
        headers: {
            Authorization: accessToken,
        },
    }
    return ajax(options)
}

async function getAchievement({ userId, achievementId, accessToken }) {
    const options = {
        method: 'GET',
        url: `${API_URL}/auth/user/${userId}/achievement/${achievementId}`,
        headers: {
            Authorization: accessToken,
        },
    }
    return ajax(options)
}

async function updateRoom({ userId, room, accessToken }) {
    const options = {
        method: 'PUT',
        url: `${API_URL}/auth/user/${userId}/room`,
        headers: {
            Authorization: accessToken,
        },
    }
    return ajax(options)
}

async function createAchievement({
    userId,
    title,
    startTime,
    endTime,
    dailyLogId,
    accessToken,
}) {
    const options = {
        method: 'POST',
        url: `${API_URL}/auth/user/${userId}/achievement`,
        body: {
            title,
            startTime,
            endTime,
            dailyLogId,
        },
        headers: {
            Authorization: accessToken,
        },
    }
    return ajax(options)
}

async function clickLike({ userId, calendarId, accessToken }) {
    const options = {
        method: 'PUT',
        url: `${API_URL}/auth/calendar/${calendarId}/like`,
        body: {
            userId,
        },
        headers: {
            Authorization: accessToken,
        },
    }
    return ajax(options)
}

async function toggleVisible({ userId, accessToken }) {
    const options = {
        method: 'PUT',
        url: `${API_URL}/auth/user/${userId}/visible`,
        headers: {
            Authorization: accessToken,
        },
    }
    return ajax(options)
}

export const API = {
    signIn,
    signUp,
    getDailyLog,
    getCalendar,
    getAchievement,
    updateRoom,
    createAchievement,
    clickLike,
    toggleVisible,
}
