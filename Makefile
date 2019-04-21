install:
	npm install

publish:
	npx gulp build

watch:
	npx gulp watch

lint:
	npx eslint .
