export const state = () => ({
  releaseVersion: null,
  hiddenRelease: null,
  latestRelease: null,
  hiddenAnnouncement: null
})

export const mutations = {
  MutReleaseVersion(state, releaseVersion) {
    state.releaseVersion = releaseVersion
  },
  MutHiddenRelease(state, hiddenRelease) {
    state.hiddenRelease = hiddenRelease
  },
  MutLatestRelease(state, latestRelease) {
    state.latestRelease = latestRelease
  },
  MutHiddenAnnouncement(state, hiddenAnnouncement) {
    state.hiddenAnnouncement = hiddenAnnouncement
  }
}

/**
 * @copyright Copyright (c) 2021, Xgene Cloud Ltd
 *
 * @author Naveen MR <oof1lab@gmail.com>
 * @author Pranav C Balan <pranavxc@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
