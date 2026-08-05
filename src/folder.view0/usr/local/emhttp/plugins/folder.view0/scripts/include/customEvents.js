const folderEvents = new EventTarget();

// Container label that assigns a container to a folder by name. The older 'folder.view2' and
// 'folder.view' keys are honoured so labels set up under the upstream plugins keep working.
const FOLDER_LABEL_KEYS = ['folder.view0', 'folder.view2', 'folder.view'];

/**
 * Read the folder-assignment label from a container's label map, newest fork name first.
 * @param {object} labels the container's Labels (or Config.Labels) map
 * @returns {string|undefined} the folder name the container is assigned to, if any
 */
const folderLabelOf = (labels) => {
    if (!labels) return undefined;
    for (const key of FOLDER_LABEL_KEYS) {
        if (labels[key] !== undefined) return labels[key];
    }
    return undefined;
};
