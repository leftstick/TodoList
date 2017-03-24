

export function getTodoList() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve([
                {
                    title: 'Learn AngularJS',
                    completed: true
                },
                {
                    title: 'Learn TypeScript',
                    completed: false
                },
                {
                    title: 'Learn gulp',
                    completed: true
                },
                {
                    title: 'Learn webpack',
                    completed: false
                }
            ]);
        }, 1500);
    });
}
